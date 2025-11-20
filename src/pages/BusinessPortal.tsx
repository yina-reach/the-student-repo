import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { TabKey } from "../tabTypes";
import StudentsSubtabs, { SubtabKey } from "../components/StudentSubtabs";
import FlexComponent from "../components/FlexComponent";
import ProjectCard from "../components/ProjectComponent";
import BiosSection, { sampleStudents }  from "../components/BioSection";
import MessagesSection from "../components/ConversationComponent";
import { supabase } from "../supabase";
import { useAuth } from "../useAuth";


type StudentProfile = {
  id: string;
  name: string;
  school: string;
};

export default function BusinessPortal() {
  const [activeTab, setActiveTab] = useState<TabKey>("students");
  const [activeSubtab, setActiveSubtab] = useState<SubtabKey>("humble");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [profilesCount, setProfilesCount] = useState<number | null>(null);
  const [initialConversationId, setInitialConversationId] = useState<
    string | null
  >(null);

  const [shortlist, setShortlist] = useState<StudentProfile[]>([]);
  const [shortlistedProjectIds, setShortlistedProjectIds] = useState<string[]>([]);
  const [shortlistedBioIds, setShortlistedBioIds] = useState<string[]>([]);

  const { user } = useAuth();
  const sarahProfile: StudentProfile = {
    id: "some-student-id",
    name: "Sarah Chen",
    school: "MIT ’25",
  };

  const toggleShortlist = (student: StudentProfile) => {
    setShortlist((current) => {
      const alreadyInList = current.some((s) => s.id === student.id);

      if (alreadyInList) {
        return current.filter((s) => s.id !== student.id);
      }

      return [...current, student];
    });
  };
  const demoProjectId = "collabdocs-demo";

  const demoProject = {
    id: demoProjectId,
    title: "CollabDocs",
    description:
      "Real-time collaborative document editing platform with WebSocket support. Real-time collaborative document editing platform with WebSocket support.",
    tags: ["React", "WebSockets", "CRDTs", "Node.js"],
    authorName: "Sarah Chen",
    authorSchool: "MIT ’25",
  };


  const toggleProjectShortlist = (projectId: string) => {
    setShortlistedProjectIds((current) =>
      current.includes(projectId)
        ? current.filter((id) => id !== projectId)
        : [...current, projectId]
    );
  };

  const toggleBioShortlist = (bioId: string) => {
    setShortlistedBioIds((current) =>
      current.includes(bioId)
        ? current.filter((id) => id !== bioId)
        : [...current, bioId]
    );
  };
  const shortlistedBios = sampleStudents.filter((student) =>
  shortlistedBioIds.includes(student.id)
);

  
  const handleStartConversation = async (studentId: string) => {
    if (!user) return; // not logged in

    // assume conversations table has business_id & student_id with a UNIQUE constraint on (business_id, student_id)
    const { data, error } = await supabase
      .from("conversations")
      .upsert(
        {
          business_id: user.id,
          student_id: studentId,
        },
        { onConflict: "business_id,student_id" }
      )
      .select("id")
      .single();

    if (error) {
      console.error("Error starting conversation", error);
      return;
    }

    setInitialConversationId(data.id);
    setActiveTab("messages");
  };

  useEffect(() => {
    const loadCount = async () => {
      const { count, error } = await supabase
        .from("submissions")
        .select("id", { count: "exact", head: true });

      if (error) {
        console.error("Error loading submissions count", error);
        return;
      }

      setProfilesCount(count ?? 0);
    };

    loadCount();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <NavBar activeTab={activeTab} onChangeTab={setActiveTab} />

      {activeTab === "messages" ? (
        // FULL-SCREEN MESSAGES LAYOUT
        <main className="flex-1 flex justify-center items-start bg-white pt-8">
          <MessagesSection
            initialConversationId={initialConversationId ?? undefined}
          />
        </main>
      ) : (
        // EXISTING LAYOUT FOR OTHER TABS
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 mt-10">
          {activeTab === "students" && (
            <>
              <div className="flex justify-between">
                <div className="flex items-center gap-6">
                  <h1 className="text-xl font-semibold">Students</h1>
                  <StudentsSubtabs
                    active={activeSubtab}
                    setActive={setActiveSubtab}
                  />
                </div>
                <button className="flex items-center gap-2 rounded-full border border-brand-blue px-4 py-2 font-medium text-black hover:bg-brand-blue/5 transition">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filters
                </button>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-gray-400">
                  {profilesCount === null
                    ? "Loading profiles…"
                    : `${profilesCount} profiles`}
                </div>

                <div className="flex items-center justify-end gap-4 mb-4">
                  <div className="relative">
                    <select
                      value={sortOrder}
                      onChange={(e) =>
                        setSortOrder(e.target.value as "asc" | "desc")
                      }
                      className="px-4 py-2 text-sm rounded-lg hover:bg-gray-50 appearance-none pr-8"
                    >
                      <option value="asc">Alphabetical</option>
                      <option value="desc">Recent</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {activeSubtab === "humble" && (
                <div className="flex items-center justify-center">
                  <FlexComponent
                    authorName={sarahProfile.name}
                    authorSchool={sarahProfile.school}
                    studentId={sarahProfile.id}
                    onStartConversation={handleStartConversation}
                    isShortlisted={shortlist.some((s) => s.id === sarahProfile.id)}
                    onToggleShortlist={() => toggleShortlist(sarahProfile)}
                  />
                </div>
              )}
              
              {activeSubtab === "projects" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-4">
                  <ProjectCard
                    title={demoProject.title}
                    description={demoProject.description}
                    tags={demoProject.tags}
                    authorName={demoProject.authorName}
                    authorSchool={demoProject.authorSchool}
                    onViewProject={() => console.log("View project clicked")}
                    isShortlisted={shortlistedProjectIds.includes(demoProjectId)}
                    onToggleShortlist={() => toggleProjectShortlist(demoProjectId)}
                  />
                </div>
              )}

              {activeSubtab === "bios" && (
              <BiosSection
                shortlistedBioIds={shortlistedBioIds}
                onToggleBioShortlist={toggleBioShortlist}
              />
            )}
            </>
          )}

          {activeTab === "shortlist" && (
          <div>
            <h1 className="text-xl font-semibold mb-4">Shortlist</h1>

            {shortlist.length === 0 &&
              shortlistedProjectIds.length === 0 &&
              shortlistedBios.length === 0 ? (
              <p className="text-sm text-gray-500">
                You haven&apos;t shortlisted any students yet. Click the flag icon on a
                student, project, or bio to save it here.
              </p>
            ) : (
              <div className="space-y-10">
                {/* Humble Flex */}
                {shortlist.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold text-gray-500">
                      Humble Flex
                    </h2>
                    <div className="space-y-4">
                      {shortlist.map((student) => (
                        <FlexComponent
                          key={student.id}
                          authorName={student.name}
                          authorSchool={student.school}
                          studentId={student.id}
                          onStartConversation={handleStartConversation}
                          isShortlisted={true}
                          onToggleShortlist={() => toggleShortlist(student)}
                        />
                      ))}
                    </div>
                  </section>
                )}

                
                {/* Projects */}
                  {shortlistedProjectIds.includes(demoProjectId) && (
                    <section>
                      <h2 className="mb-3 text-sm font-semibold text-gray-500">Projects</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard
                          title={demoProject.title}
                          description={demoProject.description}
                          tags={demoProject.tags}
                          authorName={demoProject.authorName}
                          authorSchool={demoProject.authorSchool}
                          onViewProject={() => console.log("View project clicked")}
                          isShortlisted={true}
                          onToggleShortlist={() => toggleProjectShortlist(demoProjectId)}
                        />
                      </div>
                    </section>
                  )}


                {/* Bios */}
                {shortlistedBios.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold text-gray-500">Bios</h2>
                    <BiosSection
                      students={shortlistedBios}
                      shortlistedBioIds={shortlistedBioIds}
                      onToggleBioShortlist={toggleBioShortlist}
                    />
                  </section>
                )}
              </div>
            )}
          </div>
        )}
        </main>
      )}

      <Footer />
    </div>
  );
}
