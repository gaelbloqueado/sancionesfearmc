import { SearchParams } from "@/types";
import { siteConfig } from "@config/site";
import p from "@/lib/language/utils/parse";
import { getWarnCount } from "@/lib/punishment/warn";
import { language } from "@/lib/language/dictionaries";
import { getPage, getPlayer, getStaff } from "@/utils/searchParams";


import { DefaultPage } from "@/components/layout/default-page";
import { WarnsTable } from "@/components/punishments/warns/warns-table";

export async function generateMetadata() {
  
  const { dictionary } = await language();
  
  const warnCount = await getWarnCount();
  
  return {
    title: dictionary.pages.warns.title,
    openGraph: {
      images: process.env.SITE_URL + siteConfig.logo,
      description: p(siteConfig.openGraph.pages.warns.description, {
        total: warnCount
      })
    }
  }
}

export default async function Warns(searchParams: SearchParams) {
  const dictionary = (await language()).dictionary.pages.warns;
  
  const page = getPage(searchParams);
  const player = getPlayer(searchParams);
  const staff = getStaff(searchParams);
  
  const warnCount = await getWarnCount(player, staff);

  return (
    <DefaultPage
      title={dictionary.title}
      description={p(dictionary.subtitle, {
        total: warnCount
      })}
      className="w-full lg:w-[1024px]"
    >
      <WarnsTable page={page} player={player} staff={staff} />
    </DefaultPage>
  );
}