import './style.css';
import MensProducts from '../Products/Categories/Mens';
import WomensProducts from '../Products/Categories/Womens';
import ReduxExamples from '../Products/ReduxExamples';
const MainPage = () => {
    return (
        <>
            <div className="main">
                <div className="info">
                    <div className="info-decoreted">
                        <h1>Shopping Mall</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Accusamus ullam rerum iusto adipisci, soluta ad laborum dolorem possimus nihil. 
                        Vero molestias eos natus, obcaecati sapiente eveniet perferendis illo quaerat tempora?</p>
                    </div>
                </div>
            </div>
            <MensProducts/>
            <WomensProducts/>
            {/* <Electronics/>
            <Jewelery/> */}
            <footer>
                <ReduxExamples/>
            </footer>
        </>
        
    )
}
export default MainPage;