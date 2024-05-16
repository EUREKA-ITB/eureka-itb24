import Image from 'next/image'
import logo_eureka from "@/components/img/logo_eureka.png"
export default function FooterPage(){
    return <>
    
<footer className="px-20 pb-10 w-full">
    <div className="flex flex-col justify-between  md:flex-row md:items-center ">
        <div className=""></div>
        <div className="flex flex-col items-center">
            <Image src={logo_eureka} width={300} alt=""/>
        </div>
        <div className="flex flex-col items-end space-y-2 pt-10 md:pt-0 ">
            <p>The Physics Multiverse </p>
            <h1 className="text-4xl font-bold italic">EUREKA! ITB 2024</h1>
            <h2 className="text-2xl font-bold pt-10">COMPETITIONS</h2>
            <a href="#" className="hover:underline">Physics Olympiad</a>
            <a href="#" className="hover:underline">Scientific Writing Competition</a> 
            <h2 className="text-2xl font-bold pt-10">ACKNOWLEDGEMENTS</h2>
            <a href="#" className="hover:underline">Sponsors</a> 
            <a href="#" className="hover:underline">Media Partners</a> 
        </div>
    </div> 
    <div>
        <div className="sm:flex sm:items-center sm:justify-between pt-5">
             <div className="flex">
                <link href='https://unpkg.com/css.gg@2.0.0/icons/css/instagram.css' rel='stylesheet'/>
                <link href='https://unpkg.com/css.gg@2.0.0/icons/css/facebook.css' rel='stylesheet'/>
                <link href='https://unpkg.com/css.gg@2.0.0/icons/css/twitter.css' rel='stylesheet'/>
                        
                <a href="https://www.instagram.com/eurekaitb/" className="gg-instagram text-gray-400 hover:text-gray-200 dark:hover:text-white m-4"></a>
                <a href="https://twitter.com/eurekaitb" className="gg-twitter text-gray-400 hover:text-gray-200 dark:hover:text-white m-4"></a>
                <a href="https://www.facebook.com/EurekaITB/" className="gg-facebook text-gray-400 hover:text-gray-200 dark:hover:text-white m-4"></a>
                
            </div>
          <span className="text-sm text-gray-400 sm:text-center">© 2024 EUREKA! ITB</span>
        </div>
    </div>
</footer>
    </>;
}