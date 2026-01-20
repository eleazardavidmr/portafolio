import Layout from "@/components/Layout";
import useProfile from "@/hooks/useProfile";
import MemberCard from "./MemberCard";
import Loader from "@/components/Loader";

export default function MembersPage() {
  const { allProfiles, loading } = useProfile();

  if (loading) {
    return <Loader fullScreen />;
  }

  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProfiles?.data?.map((profile) => {
            return <MemberCard key={profile.id} member={profile} />;
          })}
        </div>
      </main>
    </Layout>
  );
}
