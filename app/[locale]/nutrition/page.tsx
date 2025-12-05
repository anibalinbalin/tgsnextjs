import NutritionHero from '@/components/nutrition-hero'
import NutritionContent5 from '@/components/nutrition-content5'
import NutritionPinaSection from '@/components/nutrition-pina-section'
import Nut1Content5 from '@/components/nut1-content5'
import NutritionPolicyCta from '@/components/nutrition-policy-cta'
import Nut2Content5 from '@/components/nut2-content5'
import MenuSection from '@/components/menu-table/menu-section'
import { fetchMenuData } from '@/lib/google-sheets'

// Revalidate every hour (3600 seconds)
export const revalidate = 3600

export default async function NutritionPage() {
    const menuData = await fetchMenuData()

    return (
        <>
            <NutritionHero />
            <NutritionContent5 />
            <NutritionPinaSection />
            <Nut1Content5 />
            <NutritionPolicyCta />
            <Nut2Content5 />
            <MenuSection headerVariant="bottom-toggle" data={menuData} />
        </>
    )
}
