import React from 'react'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function NutritionPolicyCta() {
    return (
        <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/6-school_life/5-nutrition/_DSC2177.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 h-full flex items-center justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-[#D39885] hover:bg-[#C65D3B] text-white">
                    <a href="https://drive.google.com/file/d/1GEXVU-Wf4TB9J8GJziATrwwMqX3IyygM/view" target="_blank" rel="noopener noreferrer">
                        Read our Nutrition Policy
                    </a>
                </Button>
            </div>
            <DevBadge name="nutrition-policy-cta" />
        </div>
    )
}
