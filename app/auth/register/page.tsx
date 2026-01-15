
import RegisterApp from "@/components/auth/RegisterApp";
import CustomContainer from "@/components/ui/CustomContainer";







const RegisterPage: React.FC = async () => {

    return (
        <section className="py-12">
            <CustomContainer>
                <RegisterApp />
            </CustomContainer>
        </section>
    )
}; export default RegisterPage
