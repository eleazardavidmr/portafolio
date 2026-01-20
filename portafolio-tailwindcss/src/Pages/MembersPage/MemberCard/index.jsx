// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MemberCard({ member }) {
  const displayName = member.username || "Usuario sin nombre";
  const displayBio =
    member.bio || "Este usuario no ha agregado una biografía aún.";
  const displayLocation = member.location || "Ubicación no especificada";
  const avatarUrl =
    member.avatar_url ||
    `https://ui-avatars.com/api/?name=${displayName}&background=0D8ABC&color=fff`;

  return (
    <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center group hover:translate-y-[-4px] transition-all duration-300">
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse scale-110 opacity-50"></div>
        <img
          alt={`Avatar de ${displayName}`}
          className="w-24 h-24 rounded-full object-cover border-4 border-primary relative z-10 bg-slate-200 dark:bg-slate-800"
          src={avatarUrl}
        />
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white dark:border-[#020617] rounded-full z-20"></div>
      </div>

      <h3
        className={`text-xl font-bold group-hover:text-primary transition-colors ${
          !member.username && "text-slate-400 italic font-medium"
        }`}
      >
        {displayName}
      </h3>

      <p
        className={`text-sm mt-1 mb-4 line-clamp-2 min-h-[2.5rem] ${
          member.bio
            ? "text-slate-500 dark:text-slate-400"
            : "text-slate-400 dark:text-slate-500 italic opacity-70"
        }`}
      >
        {displayBio}
      </p>

      <p
        className={`text-sm line-clamp-1 mb-6 px-2 ${
          member.location
            ? "text-slate-600 dark:text-slate-400"
            : "text-slate-400 dark:text-slate-500 italic opacity-70"
        }`}
      >
        {displayLocation}
      </p>

      {/* <Link
        to={`/miembros/${member.username || "*"}`}
        className="w-full py-3 border border-primary/30 hover:bg-primary hover:text-white text-primary rounded-lg text-sm font-bold transition-all"
      >
        Ver Perfil
      </Link> */}
    </div>
  );
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar_url: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
