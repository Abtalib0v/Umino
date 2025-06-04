import { useQuery } from "@tanstack/react-query";
import { GetApiService } from "../../services/api";
import Cards from "../Cards";

export default function DefaultCard() {
  const { data } = useQuery({
    queryKey: ["default-card"],
    queryFn: () => GetApiService("default-cards?populate=*"),
  });
  return (
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px]">
        {data?.data.slice(0,6).map((item,idx) => (
            <Cards key={idx}
              image={`http://localhost:1337${item.image.url}`}
              hovimages={`http://localhost:1337${item.hovimages.url}`}
              text={item?.text}
              price={item?.price}
              disprice={item?.disprice}
            />
        ))}
      </div>
        
        );
}
