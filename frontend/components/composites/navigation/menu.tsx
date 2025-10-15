import Image from "next/image";
import MenuItem from "@/components/composites/navigation/menu-item";
import Link from "next/link";
import SecondaryButton from "@/components/atoms/SecondaryButton";

const Menu = () => {
    return (
        <header className={"flex justify-center px-8 py-4"}>
            <div className={"w-11/12 h-14 px-6 flex flex-row items-center justify-between bg-secondary/85 rounded-2xl backdrop-blur-md shadow-lg/10 shadow-text-primary"}>
                <nav className={"flex flex-row items-center gap-6"}>
                    <Link href={"/"}><Image src={"/logo/logo-light.svg"} alt={"Logo projektu světlé"} width={180} height={90}/></Link>
                    <MenuItem label={"Nejnovější"} isMulti />
                    <MenuItem label={"O projektu"} isMulti />
                    <MenuItem label={"Záložka"} isMulti />
                </nav>
                <div className={""}>
                    <SecondaryButton label={"Přihlásit se"} icon={"material-symbols:person-outline"} className={"hover:bg-primary/10"}/>
                </div>
            </div>
        </header>
    );
}


export default Menu;