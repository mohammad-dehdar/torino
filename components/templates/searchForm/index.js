'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from 'zaman';
import QueryString from 'qs';
import { MapPin, Calendar, EarthIcon } from 'lucide-react';
import cities from '@/core/data/cityData';
import { useGetTours } from '@/core/services/queries';
import { DateToIso, flattenObject } from '@/core/utils/helper';
import useQuery from '@/core/hooks/query';

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { getQuery } = useQuery();
  
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      originId: "default",
      destinationId: "default",
      date: null,
    }
  });

  const { data, isPending, refetch } = useGetTours(query);

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query]);

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    const date = getQuery("date");
    if (originId && destinationId && date) {
      reset({ originId, destinationId, date });
    }
  }, []);

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
    setQuery(flattenObject(form));
  };

  return (
    <div className="w-full md:w-fit  mx-auto p-4 mt-10">
      <h2 className="text-center font-medium text-[#595959] md:text-[28px] mb-8">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      
      <form 
        onSubmit={handleSubmit(submitHandler)}
        className="relative bg-white rounded-3xl border p-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select
              {...register("originId")}
              className="w-full py-2 px-10 rounded-lg border md:border-none focus:ring-2 focus:ring-primary/20 text-right appearance-none"
              dir="rtl"
            >
              <option value="default">مبدا</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <EarthIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              {...register("destinationId")}
              className="w-full py-2 px-10 rounded-lg border md:border-none focus:ring-2 focus:ring-primary/20 text-right appearance-none"
              dir="rtl"
            >
              <option value="default">مقصد</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </div>

          <div className="relative col-span-2 md:col-span-1 border px-3 py-2 rounded-lg md:w-fit ">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 mx-auto">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <DatePicker
                  round="x2"
                  accentColor="#28A745"
                  onChange={(e) => onChange({ 
                    startDate: e.from ? DateToIso(e.from) : null, 
                    endDate: e.to ? DateToIso(e.to) : null 
                  })}
                  range
                  className="w-full"
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full h-full bg-primary col-span-2 md:col-span-1 text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors md:mr-2"
          >
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;