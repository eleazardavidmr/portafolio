import Header from "@pages/ProfilePage/Header";
import useProfile from "@hooks/useProfile";
import useLikes from "@hooks/useLikes";
import StatsCard from "@pages/ProfilePage/StatsCard";
import Loader from "@/components/Loader";
import Layout from "@/components/Layout";
import { MdFavorite } from "react-icons/md";
export default function ProfilePage() {
  const { profile, id, loading: profileLoading } = useProfile();
  const { userLikes, loading: likesLoading } = useLikes(null, id);

  const isLoading = profileLoading || (id && likesLoading);

  if (isLoading) {
    return <Loader fullScreen />;
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-12">
        <Header profile={profile} userId={id} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            label="Posts Likeados"
            value={userLikes}
            icon={<MdFavorite />}
          />
        </div>
      </div>
    </Layout>
  );
}
