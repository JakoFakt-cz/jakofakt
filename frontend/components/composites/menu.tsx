import Image from "next/image";

const Menu = () => {
    return (
        <header className={"flex justify-center px-8 py-2"}>
            <div className={"bg-primary rounded-2xl w-11/12 h-14 px-6"}>
                <div className={"flex items-center w-full h-full"}>
                    <Image src={"/logo/logo-light.svg"} alt={"Logo projektu světlé"} width={200} height={100}/>
                    <h2 className={"font-semibold text-primary text-lg"}>Nejnovější</h2>
                </div>
                <div className={"ml-auto"}>

                </div>
            </div>
        </header>
    );
}


export default Menu;