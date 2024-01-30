import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input } from "@nextui-org/react";

const Header = () => {
    return (
        <div>
            <Navbar className="bg-white text-black px-5 py-4">
                <div className="flex justify-between w-full">
                    <NavbarBrand>
                        <p className="font-bold text-inherit text-xl flex items-center gap-1">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>ZinTools</p>
                    </NavbarBrand>
                    <NavbarContent>
                        {/* <input
            className="inpt-class w-[400px] h-[40px] "
            placeholder="Search"/> */}

                        <div class="relative">

                            <input type="search" id="default-search" class="block w-[450px] rounded-3xl p-4 ps-10 text-sm text-gray-200  bg-gray-300" placeholder="Search for movies, Tv shows Themes & Cast" />
                            <div class="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-700 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>

                        </div>

                    </NavbarContent>
                    <NavbarContent className="gap-3" justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <button className="signup-btn">
                                Sign Up
                            </button>
                        </NavbarItem>
                    </NavbarContent>
                </div>
                <br />

            </Navbar>


        </div>
    )
}

export default Header