'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  variant?: 'header' | 'default';
}

export function LanguageSwitcher({ variant = 'header' }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-8",
            variant === 'header' && "text-white hover:bg-white/10 hover:text-white"
          )}
          aria-label={t('changeLanguage')}
        >
          <Globe className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-accent rounded ${
              locale === loc ? 'font-medium bg-accent/50' : ''
            }`}
          >
            {t(loc)}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
