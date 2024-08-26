import usePlatform from "./UsePlatform";

const usePlatforms = (id? : number) =>{
    const { data: platform } = usePlatform();
    return  platform?.results.find((p) => p.id === id);
}
export default usePlatforms;