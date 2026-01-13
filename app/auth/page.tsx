
import Forms from "@/components/auth/Forms";
import CustomContainer from "@/components/ui/CustomContainer";
import { authOptions } from "@/lib/nextAuth";
import { getServerSession, type User, type Session } from "next-auth";
import { redirect } from "next/navigation";





const AuthPage: React.FC = async () => {
    const session: Session | null = await getServerSession(authOptions)
    const user: User | null = session?.user ? (session.user as User) : null;
    return (
        <section className="py-12">
            <CustomContainer>
                {user ? redirect("/") : <Forms />}
            </CustomContainer>
        </section>
    )
}; export default AuthPage
