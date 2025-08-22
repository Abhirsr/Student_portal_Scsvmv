"use client";

import { useState } from 'react';
import Image from 'next/image';
import AccordionItem from '@/components/AccordionItem';

// --- INITIAL DATA ---
const personalInfoData = [
  { label: 'Name', value: 'KARANAM SAI TEJA' },
  { label: 'Email', value: 'saitejasp2580@gmail.com' },
  { label: 'Mobile Number', value: 'Cell Content' },
  { label: 'Father Name', value: 'KARANAM CHOWDESWAR RAO' },
  { label: 'Date of Birth', value: '13/11/2004 00:00:00' },
];
const academicInfoData = [
  { label: 'Application Number', value: 'UGE6008085' },
  { label: 'Year Joined', value: '2022' },
  { label: 'Enrollment Number', value: 'E1022020' },
];
const initialSocialLinks = [
  { label: 'Github Profile', placeholder: 'Github Link' },
  { label: 'Linkedin profile', placeholder: 'Linkedin Link' },
  { label: 'Hacker Rank Profile', placeholder: 'Hacker Rank Link' },
];
const certificateData = [
  { label: 'Aadhar Certificate', fileName: 'Adhaa.pdf' },
  { label: 'Transfer Certificate', fileName: 'Transfer.pdf' },
  { label: 'Income Certificate', fileName: 'Income.pdf' },
];
const defaultAvatar = "/avatar.png";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string>(defaultAvatar);
  
  // --- STATE FOR SOCIAL LINKS ---
  // State to track if we are in "edit mode"
  const [isEditingSocials, setIsEditingSocials] = useState(false);
  // State to hold the array of social links, so we can add to it
  const [socialLinks, setSocialLinks] = useState(initialSocialLinks);
  // State for the new link's name and URL input fields
  const [newLinkName, setNewLinkName] = useState('');
  const [newLinkURL, setNewLinkURL] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // --- FUNCTION TO ADD A NEW LINK ---
  const handleAddNewLink = () => {
    // Basic validation: Don't add if inputs are empty
    if (newLinkName.trim() === '' || newLinkURL.trim() === '') {
      alert('Please enter both a name and a link.');
      return;
    }
    
    // Create the new link object
    const newLink = {
      label: newLinkName,
      placeholder: newLinkURL,
    };
    
    // Add the new link to the existing array in state
    setSocialLinks([...socialLinks, newLink]);
    
    // Clear the input fields for the next entry
    setNewLinkName('');
    setNewLinkURL('');
  };
  
  return (
    <main className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto  overflow-hidden">
        {/* Profile Header (Unchanged) */}
        <div className="p-6 flex items-center space-x-6  border-b-2">
           <div className="relative">
             <Image
                src={profileImage}
                alt="Profile Avatar"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-[#0369A1] rounded-full p-2 cursor-pointer hover:bg-[#0369A1] transition">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" /></svg>
              </label>
              <input id="profile-upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
           </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Name : K.Sai Teja</p>
            <p className="text-gray-600">Register Number : 11229A021</p>
            <p className="text-gray-600">Email : 11229a021@kanchiuniv.ac.in</p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="w-full">
          {/* Personal Information (Unchanged) */}
          <AccordionItem title="Personal Information">
            <div className="space-y-2">
              {personalInfoData.map((item) => <InfoRow key={item.label} label={item.label} value={item.value} />)}
            </div>
          </AccordionItem>
          
          {/* Academic Information (Unchanged) */}
          <AccordionItem title="Academic Information">
             <div className="space-y-2">
              {academicInfoData.map((item) => <InfoRow key={item.label} label={item.label} value={item.value} />)}
             </div>
          </AccordionItem>

          {/* --- MODIFIED SOCIAL PROFILE LINKS SECTION --- */}
          <AccordionItem title="Social Profile Links">
            <div className="p-4">
                {/* Edit/Done button */}
                <div className="text-right mb-4">
                    <button 
                        onClick={() => setIsEditingSocials(!isEditingSocials)}
                        className="bg-[#0369A1] text-white px-4 py-2 rounded-md hover:bg-sky-800 transition"
                    >
                        {isEditingSocials ? 'Done' : 'Add Link'}
                    </button>
                </div>

                {/* The "Add New Link" form, which only shows in edit mode */}
                {isEditingSocials && (
                    <div className="grid grid-cols-3 gap-4 items-center p-2 border-b bg-gray-50 rounded-md mb-4">
                        <input
                            type="text"
                            placeholder="Profile Name (e.g., Portfolio)"
                            value={newLinkName}
                            onChange={(e) => setNewLinkName(e.target.value)}
                            className="col-span-1 p-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="URL (e.g., https://...)"
                            value={newLinkURL}
                            onChange={(e) => setNewLinkURL(e.target.value)}
                            className="col-span-1 p-2 border rounded-md"
                        />
                        <div className="text-right">
                           <button 
                                onClick={handleAddNewLink}
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                           >
                                Add Link
                           </button>
                        </div>
                    </div>
                )}

                {/* The list of social links, now mapping from state */}
                <div className="space-y-3">
                    {socialLinks.map((item) => (
                        <LinkRow key={item.label} label={item.label} placeholder={item.placeholder} />
                    ))}
                </div>
            </div>
          </AccordionItem>

          {/* Government Certificates (Unchanged) */}
          <AccordionItem title="Government Certificates">
            <div className="space-y-3">
              {certificateData.map((item) => <CertificateRow key={item.label} label={item.label} fileName={item.fileName} />)}
            </div>
          </AccordionItem>
        </div>
      </div>
    </main>
  );
}


// --- Helper components for clean rows (Unchanged) ---
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-3 gap-4 p-2 border-b">
    <p className="font-semibold text-gray-600">{label}</p>
    <p className="col-span-2 text-gray-800">{value}</p>
  </div>
);
const LinkRow = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="grid grid-cols-3 gap-4 items-center p-2 border-b">
    <p className="font-semibold text-[#0369A1] underline cursor-pointer">{label}</p>
    <p className="col-span-1 text-gray-500">{placeholder}</p>
    <div className="text-right">
       <button className="bg-[#0369A1] text-white px-4 py-1 rounded-md hover:bg-[#0369A1] transition">
          Edit
       </button>
    </div>
  </div>
);
const CertificateRow = ({ label, fileName }: { label: string; fileName: string }) => (
  <div className="grid grid-cols-3 gap-4 items-center p-2 border-b">
    <p className="font-semibold text-[#0369A1] underline cursor-pointer">{label}</p>
    <p className="col-span-1 text-gray-500">{fileName}</p>
    <div className="text-right space-x-2">
       <button className="bg-[#0369A1] text-white px-4 py-1 rounded-md hover:bg-[#0369A1] transition">
          Upload
       </button>
       <button className="bg-gray-600 text-white px-4 py-1 rounded-md hover:bg-gray-700 transition">
          View
       </button>
    </div>
  </div>
);