import { updateProfileInfo } from "@/services/profile.service";
import toast from "react-hot-toast";
import useProfile from "@/hooks/useProfile";
import EditProfileModal from "./EditProfileModal";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/components/Context/AuthContext";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosWarning } from "react-icons/io";
export default function Header() {
  const { profile, id, refreshProfile } = useProfile();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const isProfileIncomplete =
    !profile?.username || !profile?.location || !profile?.avatar_url;

  const displayName = profile?.username || "Usuario sin nombre";
  const displayLocation = profile?.location || "Ubicación no definida";
  const avatarUrl =
    profile?.avatar_url ||
    "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff";

  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };
  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const handleSaveProfileInfo = async (newInfo) => {
    const loadingToast = toast.loading("Saving profile...");
    try {
      await updateProfileInfo(id, newInfo);
      await refreshProfile();
      toast.success("Profile updated successfully!", { id: loadingToast });
      handleCloseEditProfileModal();
    } catch (e) {
      console.error(e);
      toast.error("Error updating profile", { id: loadingToast });
    }
  };

  const handleLogout = async () => {
    const loadingToast = toast.loading("Cerrando sesión...");
    try {
      await logout();
      toast.success("Sesión cerrada", { id: loadingToast });
    } catch {
      toast.error("Error al cerrar sesión", { id: loadingToast });
    }

    navigate("/");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No disponible";
    return new Date(dateString).toLocaleDateString("es-ES", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {isProfileIncomplete && (
        <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-50 animate-bounce">
          <div className="rounded-2xl border-l-4 border-yellow-400 bg-slate-900/90 backdrop-blur-md px-5 py-4 shadow-2xl flex items-center gap-4 max-w-sm ml-auto">
            <span className="material-icons-outlined text-yellow-400">
              <IoIosWarning />
            </span>
            <div className="text-sm">
              <p className="text-white font-bold">Perfil Incompleto</p>
              <button
                onClick={handleOpenEditProfileModal}
                className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
              >
                Completar ahora
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-full mb-16 pt-12 overflow-hidden md:overflow-visible">
        {/* Atmospheric Background Effects */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-end gap-10">
          {/* Avatar Section */}
          <div className="relative group mx-auto md:mx-0">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary via-cyan-400 to-blue-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-[2.2rem] overflow-hidden border-4 border-white/50 dark:border-white/5 shadow-2xl bg-slate-900">
              <img
                src={avatarUrl}
                alt={displayName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
              <div className="rounded-full bg-white/10 dark:bg-primary/10 border border-white/20 dark:border-primary/20 backdrop-blur-md shadow-sm">
                <span className="py-2 px-4 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                  {profile?.username === "eleazardavidmr"
                    ? "Project Owner"
                    : "Community Member"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
                <FaCalendarAlt className="text-sm" />
                Unido en {formatDate(profile?.created_at)}
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight break-words">
              {displayName}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-6 text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-center md:justify-start gap-2 group/loc">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover/loc:bg-primary/20 transition-colors">
                  <span className="text-primary">
                    <FaLocationDot />
                  </span>
                </div>
                <span className="text-sm font-semibold tracking-tight">
                  {displayLocation}
                </span>
              </div>

              {profile?.bio && (
                <div className="flex-1 max-w-xl">
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 italic">
                    &quot;{profile.bio}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="w-full md:w-auto mt-4 md:mt-0 flex flex-col gap-3">
            <button
              onClick={handleOpenEditProfileModal}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-primary/20"
            >
              Configure Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-red-500/10 text-red-500 font-bold text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <FiLogOut className="group-hover:translate-x-1 transition-transform" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={handleCloseEditProfileModal}
        onSubmit={handleSaveProfileInfo}
        profile={profile}
      />
    </>
  );
}
