import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cropper from "react-easy-crop";
import PropTypes from "prop-types";
import { getCroppedImg } from "@utils";
import {
  FiX,
  FiCamera,
  FiCheck,
  FiTrash2,
  FiRotateCw,
  FiZoomIn,
  FiUser,
  FiMapPin,
} from "react-icons/fi";

export default function EditProfileModal({
  isOpen,
  onClose,
  onSubmit,
  profile,
}) {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [formData, setFormData] = useState({
    username: profile?.username || "",
    location: profile?.location || "",
    avatar: profile?.avatar_url || "",
    bio: profile?.bio || "",
  });

  // Sync formData when profile changes or modal opens
  useEffect(() => {
    if (isOpen && profile) {
      setFormData({
        username: profile.username || "",
        location: profile.location || "",
        avatar: profile.avatar_url || "",
        bio: profile.bio || "",
      });
    }
  }, [isOpen, profile]);

  const handleClose = (e) => {
    if (e) e.preventDefault();
    cleanupImage();
    onClose();
  };

  const cleanupImage = () => {
    if (selectedImage) URL.revokeObjectURL(selectedImage);
    setSelectedImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const changeAttribute = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    cleanupImage();
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleApplyCrop = async () => {
    try {
      if (!selectedImage || !croppedAreaPixels) return;

      const croppedImage = await getCroppedImg(
        selectedImage,
        croppedAreaPixels,
      );

      setFormData((prev) => ({
        ...prev,
        avatar: croppedImage,
      }));

      // Clean up original image and close cropper
      cleanupImage();
    } catch (e) {
      console.error("Error cropping image:", e);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          onClick={handleClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="modal-glass w-full max-w-xl rounded-[2rem] overflow-hidden relative shadow-2xl"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Edit Profile
              </h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center justify-center"
              >
                <FiX className="text-slate-400 group-hover:text-white text-xl" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 p-1">
                    <img
                      src={
                        formData.avatar ||
                        "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                      }
                      alt="Current Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <FiCamera className="text-white text-2xl" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-semibold mb-2 text-white">
                    Change Avatar
                  </h4>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-1.5 text-xs font-bold border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors uppercase tracking-wider"
                  >
                    Upload New Image
                  </button>
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    accept="image/*"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Profile Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={changeAttribute}
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Location
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={changeAttribute}
                      placeholder="City, Country"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Bio / About Me
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={changeAttribute}
                    placeholder="Tell us about yourself..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-slate-600 text-white resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-[1.5] px-6 py-3.5 rounded-xl text-sm font-bold bg-primary text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>

            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-8"
                >
                  <div className="relative w-full h-[60%] mb-8">
                    <Cropper
                      image={selectedImage}
                      crop={crop}
                      zoom={zoom}
                      aspect={1}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                    />
                  </div>
                  <div className="w-full space-y-6">
                    <div className="flex items-center gap-4">
                      <FiZoomIn className="text-slate-400" />
                      <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => setZoom(e.target.value)}
                        className="flex-1 accent-primary"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="flex items-center justify-center p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                      >
                        <FiTrash2 size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {}} // Placeholder for rotation logic
                        className="flex items-center justify-center p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
                      >
                        <FiRotateCw size={20} />
                      </button>
                      <button
                        onClick={handleApplyCrop}
                        className="flex-1 flex items-center justify-center gap-2 bg-primary text-slate-950 font-black py-3 rounded-xl hover:scale-105 transition-all text-xs uppercase tracking-widest"
                      >
                        <FiCheck />
                        Aplicar
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

EditProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    username: PropTypes.string,
    location: PropTypes.string,
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
  }),
};
