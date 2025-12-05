'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Fuse from 'fuse.js'
import { FileText } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { searchData, type SearchItem } from '@/lib/search/search-data'

interface SearchCommandProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter()
  const t = useTranslations('Search')
  const [query, setQuery] = useState('')

  const fuse = useMemo(
    () =>
      new Fuse(searchData, {
        keys: ['title', 'content'],
        threshold: 0.6,
        ignoreLocation: true,
        includeScore: true,
      }),
    []
  )

  const results = useMemo(() => {
    if (!query) return searchData
    return fuse.search(query).map((result) => result.item)
  }, [query, fuse])

  // Group results by section
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {}
    for (const item of results) {
      if (!groups[item.section]) {
        groups[item.section] = []
      }
      groups[item.section].push(item)
    }
    return groups
  }, [results])

  const handleSelect = useCallback(
    (href: string) => {
      onOpenChange(false)
      setQuery('')
      router.push(href)
    },
    [router, onOpenChange]
  )

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t('title')}
      description={t('description')}
      showCloseButton={false}
    >
      <CommandInput
        placeholder={t('placeholder')}
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>{t('noResults')}</CommandEmpty>
        {Object.entries(groupedResults).map(([section, items]) => (
          <CommandGroup
            key={section}
            heading={section}
            className="[&_[cmdk-group-heading]]:text-[#D39885]"
          >
            {items.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.title} ${item.content}`}
                onSelect={() => handleSelect(item.href)}
                className="data-[selected=true]:bg-[#D39885]/10"
              >
                <FileText className="mr-2 size-4 text-[#D39885]" />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
