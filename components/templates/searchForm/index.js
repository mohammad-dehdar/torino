'use client'

import cities from "@/core/data/cityData"
import { useGetTours } from "@/core/services/queries";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import useQuery from "@/core/hooks/query";
import { useRouter } from "next/navigation";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { DatePicker } from "zaman";

function SearchForm() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { getQuery } = useQuery();
  const { register, handleSubmit, control, reset } = useForm();
  const { data, isPending, refetch } = useGetTours(query);

  useEffect(() => {
    if (query) {
      refetch(); // فقط زمانی که query تغییر کند
    }
  }, [query]);

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) {
      reset({ originId, destinationId });
    }
  }, []); 
  

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
    setQuery(flattenObject(form));
  };
  return (
    <div>
      <form className="max-w-[1440px] mx-8 mt-10 md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:border md:p-4 md:rounded-2xl" onSubmit={handleSubmit(submitHandler)}>
        <select {...register("originId")} className="border rounded-md p-1 px-2 md:border-y-0 md:rounded-none md:border-r-0">
          <option value="default">مبدا</option>
          {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
        </select>
        <select {...register("destinationId")} className="border rounded-md py-1 px-2 md:border-none">
          <option value="default">مقصد</option>
          {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
        </select>
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange } }) => {
            return (
              <DatePicker
                round="x2"
                accentColor="#28A745"
                onChange={(e) => onChange({ startDate: DateToIso(e.from), endDate: DateToIso(e.to) })}
                range
              />
            );
          }}
        />
        <button className=" bg-primary text-white rounded-md col-span-2 md:col-span-1 p-2" type="submit">جستجو</button>
      </form>
    </div>
  )
}

export default SearchForm