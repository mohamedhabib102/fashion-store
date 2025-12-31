import CustomContainer from "../ui/CustomContainer";
import NewCollection from "../ui/NewCollection";
import SearchProducts from "../ui/SearchProducst";




const Hero:React.FC = () => {
    return (
        <section className="py-8 bg-[#f2f2f2]">
            <CustomContainer>
                <SearchProducts found={true} size="md"/>
                <NewCollection/>
            </CustomContainer>
        </section>
    )
};export default Hero
