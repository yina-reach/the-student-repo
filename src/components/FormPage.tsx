import { useState } from "react";
import logo from "../assets/logo.png";

export default function FormPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    graduationYear: "",
    major: "",
    github: "",
    linkedin: "",
    typeOfWork: [],
    relocating: "yes",
    skills: [],
    sideProjects: "",
    flex: "",
  });
  const [skillsList, setSkillsList] = useState(["Python", "Java", "C++", "React", "TensorFlow"]);
  const [newSkill, setNewSkill] = useState("");

  const workOptions = ["Part-time", "Full-time", "Opportunistic", "Internship"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleMultiSelect = (name, option) => {
    setForm((f) => {
      const exists = f[name].includes(option);
      return {
        ...f,
        [name]: exists ? f[name].filter((s) => s !== option) : [...f[name], option],
      };
    });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const value = newSkill.trim();
    if (
      value &&
      !skillsList.some(
        (s) => s.trim().toLowerCase() === value.toLowerCase()
      )
    ) {
      setSkillsList((prev) => [...prev, value]);
      setForm((f) => ({ ...f, skills: [...f.skills, value] }));
      setNewSkill("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-mono">
      {/* Custom Header */}
      <div className="w-full bg-white border-b border-brand-line flex items-center justify-between h-16 px-6">
        <img src={logo} alt="Logo" className="h-7 w-7" />
        <div className="ml-auto font-mono font-bold text-xs tracking-wider">LOG IN</div>
      </div>
      {/* Form Card */}
      <div className="flex-1 flex flex-col items-center justify-center py-8 bg-transparent">
        <form className="w-full max-w-2xl bg-white p-8 border border-brand-line rounded-xl shadow mx-auto space-y-6 font-mono">
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">First Name</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">Last Name</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">School</label>
            <input type="text" name="school" value={form.school} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">Graduation Year</label>
            <input type="text" name="graduationYear" value={form.graduationYear} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">Major</label>
            <input type="text" name="major" value={form.major} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">Github</label>
            <input type="text" name="github" value={form.github} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">LinkedIn</label>
            <input type="text" name="linkedin" value={form.linkedin} onChange={handleChange} className="rounded border border-gray-300 px-3 py-1.5 text-sm font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          </div>
          <div>
            <label className="text-s font-semibold">Type of Work</label>
            <div className="flex flex-wrap mt-1 gap-2">
              {workOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`border text-xs px-2 py-1 rounded focus:outline-none font-mono transition ${form.typeOfWork.includes(option) ? 'bg-brand-blue text-white border-brand-blue' : 'bg-gray-100 border-brand-line text-black'}`}
                  onClick={() => handleMultiSelect('typeOfWork', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-s font-semibold">Open to relocating?<span className='ml-1'>*</span></label>
            <div className="flex gap-6 items-center mt-1">
              <label className="flex items-center gap-1 text-xs font-mono font-medium"><input type="radio" name="relocating" value="yes" checked={form.relocating === "yes"} onChange={handleChange}/> Yes</label>
              <label className="flex items-center gap-1 text-xs font-mono font-medium"><input type="radio" name="relocating" value="no" checked={form.relocating === "no"} onChange={handleChange}/> No</label>
              <label className="flex items-center gap-1 text-xs font-mono font-medium"><input type="radio" name="relocating" value="maybe" checked={form.relocating === "maybe"} onChange={handleChange}/> Maybe</label>
            </div>
          </div>
          <div>
            <label className="text-s font-semibold">Which programming languages, frameworks, and technical areas are you proficient in? <span className='text-s text-gray-500'>(e.g. Python, JavaScript, React, Tensorflow, frontend, full-stack, etc.)</span></label>
            <div className="flex flex-wrap gap-2 mt-1">
              {skillsList.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`border text-xs px-2 py-1 rounded focus:outline-none font-mono transition ${form.skills.includes(option) ? 'bg-brand-blue text-white border-brand-blue' : 'bg-gray-100 border-brand-line text-black'}`}
                  onClick={() => handleMultiSelect('skills', option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add another..."
                className="border border-gray-300 rounded px-2 py-1 text-xs font-mono bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button
                type="button"
                className="bg-brand-blue text-white rounded px-3 py-1 text-xs font-semibold font-mono hover:brightness-95 disabled:opacity-50"
                disabled={!newSkill.trim() || skillsList.some(s=>s.trim().toLowerCase() === newSkill.trim().toLowerCase())}
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">What side projects are you currently hustling on?<span className='ml-1'>*</span></label>
            <textarea name="sideProjects" value={form.sideProjects} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2 text-sm font-mono resize-y mt-1 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" rows={2} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-s font-semibold">Humble flex, we want to hear the things you’re proud of! Any outlier things you have done in LIFE. Cool projects, hacks, viral moments, whatever you are most proud of. What non-traditional things were you doing growing up?</label>
            <textarea name="flex" value={form.flex} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2 text-sm font-mono resize-y mt-1 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-blue" rows={3} />
          </div>
          <button
            type="submit"
            className="w-full mt-1 bg-brand-blue text-white rounded-lg py-2 font-semibold text-sm tracking-wide shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono"
            disabled
          >
            SUBMIT YOUR PROFILE
          </button>
        </form>
      </div>
      {/* Footer Bar */}
      <footer className="w-full bg-brand-blue text-white py-5 mt-auto text-xs font-mono">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-end md:justify-between gap-5 px-5">
          <div>
            <span className="font-bold">The Repo by Reach Capital</span><br />
            A live, opt-in talent list for builders, hackers, designers and engineers.
          </div>
          <div>
            <span className="font-bold">Resources</span><br />
            Privacy Policy<br />
            Terms of Service<br />
            Contact Us
          </div>
          <div>
            <span className="font-bold">Connect</span><br />
            Questions? Reach out to us at <a href="mailto:hi@repo.reachcapital.com" className="underline text-white">hi@repo.reachcapital.com</a>
          </div>
        </div>
        <div className="text-center text-xs opacity-80 mt-3">
          &copy; 2025 Reach Capital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
