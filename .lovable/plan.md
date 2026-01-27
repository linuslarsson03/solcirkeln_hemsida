
# Ändringar för Solcirkelns hemsida

## Sammanfattning
Tre huvudändringar: Ersätt produktbilder med en stilren textlista, ta bort datumväljaren i formuläret, och ta bort kundomdöme-sektionen.

---

## 1. Produkter - Stilren textlista istället för bilder

**Fil:** `src/components/Products.tsx`

Ersätter nuvarande bildkort med en kreativ, minimalistisk design:
- Produktnamn i elegant typografi (Playfair Display)
- Kort beskrivning under varje produkt
- Subtil röd accent-linje eller prick framför varje produkt
- Hover-effekt som lyfter fram produkten
- Två kolumner: Utomhus och Inomhus sida vid sida på desktop

Designen blir ren och lättläst med fokus på typografi istället för bilder.

---

## 2. Kontaktformulär - Ta bort datumväljare och lägg till återkopplingstext

**Fil:** `src/components/ContactForm.tsx`

**Ta bort:**
- State-variabel `date`
- Import av Calendar, Popover-komponenter, CalendarIcon
- Hela sektionen "Önskat datum för hembesök" (rad 247-272)
- Referens till datum i mailto-länken

**Lägg till:**
- Text under submit-knappen: *"Vi återkopplar oftast inom 3 arbetsdagar."*
- Stilad med `text-muted-foreground text-sm text-center mt-4`

---

## 3. Ta bort kundomdöme-sektionen

**Fil:** `src/pages/Index.tsx`

- Ta bort import av `Testimonials`
- Ta bort `<Testimonials />` från renderingen

**Fil:** `src/components/Testimonials.tsx`

Behålls i projektet men används inte längre (kan tas bort helt om så önskas).

---

## Tekniska detaljer

### Ny produktlista-struktur
```text
+------------------------------------------+
| Våra produkter                           |
| ─────                                    |
| Kvalitetslösningar för...                |
+------------------------------------------+
|                                          |
|  UTOMHUS              INOMHUS            |
|                                          |
|  • Terrassmarkis      • Rullgardin       |
|    Perfekt för...       Klassiskt...    |
|                                          |
|  • Fönstermarkis      • Plisségardin     |
|    Klassiska...         Elegant...       |
|                                          |
|  • Sidomarkis         • Persienn         |
|    Flexibelt...         Tidlös...        |
|                                          |
|                       • Lamellgardin     |
|                         Perfekt...       |
+------------------------------------------+
```

### Uppdaterat mailto-format
E-postmeddelandet kommer inte längre innehålla "Önskat datum för hembesök"-raden.
