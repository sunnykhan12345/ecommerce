'use client'
import { useRouter } from "next/navigation";
import { TfiSearch } from "react-icons/tfi";
const Search = () => {
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        if (name) {
            router.push(`/list?name=${name}`);
        }
    };

    return (
        <form className="bg-gray-100 flex items-center justify-between gap-4 p-2 rounded-md flex-1" onSubmit={handleSearch}>
            <input type='text' name="name" placeholder='search...' className="bg-transparent outline-none flex-1" />
            <button className='cursor-pointer'>
                <TfiSearch className="h-4 w-4" />
            </button>
        </form>
    )
}

export default Search
