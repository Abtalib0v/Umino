import { useQuery } from "@tanstack/react-query";
import { GetApiService } from "../../services/api";
import Cards from "../Cards";

export default function CardSection() {
  const { data } = useQuery({
    queryKey: ["default-card"],
    queryFn: () => GetApiService("default-cards?populate=*"),
  });
  return (
      <div className="grid grid-cols-12 gap-4 w-full">
            {data?.data.map((item,idx) => (
                <div className="col-span-3">
                     <Cards key={idx}
              image={`http://localhost:1337${item.image.url}`}
              hovimages={`http://localhost:1337${item.hovimages.url}`}
              text={item?.text}
              price={item?.price}
              disprice={item?.disprice}
             />
                </div>
           
        ))}
        
      </div>
        
        );
}
