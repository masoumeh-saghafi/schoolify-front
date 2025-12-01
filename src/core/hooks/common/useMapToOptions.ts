import { useMemo } from "react";
import { string } from "zod";
import { strictObject } from "zod/v3";

// نوع خروجی استاندارد
export interface OptionType {
  key: string;
  value: string;
}

// نوع داده ورودی nullable و با data nullable
type NullableData<T> = T[] | null | undefined;

interface BaseEntityWithNullableData {
  id: string | number;
  data: {
    title?: string;
    firstName?: string;
    lastName?: string;
    identityCode?: string;
  } | null; // data می‌تواند null باشد
}

/**
 * hook برای تبدیل داده‌های nullable به آرایه OptionType
 * همیشه یک آرایه non-nullable برمی‌گرداند
 */
const useMapToOptions = <T extends BaseEntityWithNullableData>(
  data: NullableData<T>
): OptionType[] => {
  return useMemo(() => {
    return (data ?? []).map((item) => ({
      key: String(item.id),
      value:
        item.data?.title ??
        (item.data?.firstName
          ? `${item.data.identityCode} - ${item.data.firstName} ${item.data.lastName}`
          : ""),
    }));
  }, [data]);
};

export default useMapToOptions;
