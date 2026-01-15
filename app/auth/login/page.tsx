
import Login from "@/components/auth/Login";
import CustomContainer from "@/components/ui/CustomContainer";







const LoginPage: React.FC = async () => {

    return (
        <section className="py-12">
            <CustomContainer>
                <Login/>
            </CustomContainer>
        </section>
    )
}; export default LoginPage
