import Image from 'next/image'
export default function wtf(){
    return <>
    
<main className="flex flex-col px-10 pb-10 w-full">
    <Image src="./src/components/img/logo_eureka.svg" width={80} height={80} alt=""/>
    <Image src="logo_eureka.svg" width={80} height={80} alt=""/>
    <img src="./src/components/img/logo_eureka.svg"/>
    <img src="/src/components/img/logo_eureka.svg"/>
    <img src="../../components/img/logo_eureka.svg"/>
    <img src="logo_eureka.svg"/>
    <img src="/logo_eureka.svg"/>

    <Image src="./src/components/img/logo_eureka.png" width={80} height={80} alt=""/>
    <Image src="logo_eureka.png" width={80} height={80} alt=""/>
    <img src="./src/components/img/logo_eureka.png"/>
    <img src="/src/components/img/logo_eureka.png"/>
    <img src="../../components/img/logo_eureka.png"/>
    <img src="logo_eureka.png"/>
    <img src="/logo_eureka.png"/>
</main>

</>}