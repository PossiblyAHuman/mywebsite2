import '../styles/SubContainer.css'
const SubContainer = () => {
    return(
        <>
            <div className='subcontainer'>
                <img className='subcontainer-image' src='rog.png'/>
                <div className='subcontainer-text'>
                    <p>
                        Idk what to include in this section,
                        so here is my laptop I guess. 
                        I don't recommend buying gaming laptops 
                        which is kind of ironic since I own one... 
                        I needed something portable for College ¯\_(ツ)_/¯
                    </p>
                    Specs:
                    <ul>
                        <li>Processor: Ryzen 9 5980HX (8/16)</li>
                        <li>Ram: 16 GB DDR4</li>
                        <li>Storage: 512 GB + 512 GB</li>
                        <li>GPU: RX 6800M</li>
                    </ul>
                    img source: https://www.tomshardware.com/reviews/asus-rog-strix-g15-advantage-edition-rx-6800m
                </div>
            </div>
        </>
    )
}; export default SubContainer