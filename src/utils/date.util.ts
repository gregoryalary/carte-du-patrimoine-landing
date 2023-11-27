// @ts-ignore
import { fr } from "date-fns/locale/index";
import { format } from "date-fns";

export const formatDateForHuman = (date: Date) => format(date, "dd MMMM yyyy", { locale: fr });

export const formatDateForBrowser = (date: Date) => date.toISOString();
