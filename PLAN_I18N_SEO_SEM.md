# Plan de Implementación: i18n + SEO + SEM con next-intl

## 1. Estado Actual del Proyecto

### ✅ Fortalezas Existentes
- **Textos centralizados**: Todos los textos están organizados en `src/data/` por secciones
- **Estructura modular**: Cada componente tiene sus textos separados (hero, benefits, testimonials, etc.)
- **TypeScript configurado**: Interfaces definidas para todos los tipos de datos
- **SEO básico**: Metadatos configurados en `layout.tsx` y `siteDetails.ts`
- **Configuración de idioma**: `lang="es"` y `locale: 'es-ES'` ya definidos

### ❌ Limitaciones Actuales
- **Sin sistema i18n**: No hay librerías de internacionalización instaladas
- **Idioma único**: Solo español, sin soporte multi-idioma
- **Inconsistencia de idioma**: `hero.ts` tiene textos en inglés mientras el resto está en español
- **SEO limitado**: Sin etiquetas hreflang, sin rutas por locale
- **SEM no optimizado**: Sin metadatos dinámicos por idioma, sin OpenGraph optimizado

### 📁 Estructura Actual de Textos
```
src/data/
├── siteDetails.ts    # Metadatos del sitio
├── hero.ts          # Sección principal (⚠️ en inglés)
├── menuItems.ts     # Navegación
├── benefits.tsx     # Beneficios del producto
├── confianza.tsx    # Sección de confianza
├── testimonials.ts  # Testimonios
├── faq.ts          # Preguntas frecuentes
├── footer.ts       # Pie de página
├── pricing.ts      # Precios
├── stats.tsx       # Estadísticas
└── cta.ts          # Call-to-action
```

## 2. Plan de Implementación: i18n + SEO + SEM

### Fase 1: Instalación y Configuración Base

#### 1.1 Instalar Dependencias
```bash
npm install next-intl
npm install --save-dev @types/node
```

#### 1.2 Configurar next.config.mjs
```javascript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración existente
};

export default withNextIntl(nextConfig);
```

#### 1.3 Crear Configuración de Routing
**Archivo: `src/i18n/routing.ts`**
```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/privacy': {
      es: '/privacidad',
      en: '/privacy'
    }
  }
});
```

#### 1.4 Configurar i18n Request
**Archivo: `src/i18n/request.ts`**
```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
```

### Fase 2: Reestructuración de Archivos

#### 2.1 Crear Estructura de Traducciones
```
messages/
├── es.json          # Español (idioma base)
└── en.json          # Inglés
```

#### 2.2 Migrar Textos Existentes
**Convertir de:**
```typescript
// src/data/hero.ts
export const heroDetails = {
    heading: 'A new way to handle it.\nZero judgement, full privacy',
    subheading: 'Own your choices...'
}
```

**A:**
```json
// messages/es.json
{
  "hero": {
    "heading": "Una nueva forma de manejarlo.\nCero juicios, privacidad total",
    "subheading": "Controla tus decisiones con apoyo discreto y orientación basada en evidencia—sin juicios, solo cambio constante y privado."
  }
}

// messages/en.json
{
  "hero": {
    "heading": "A new way to handle it.\nZero judgement, full privacy",
    "subheading": "Own your choices with discreet support and evidence-based guidance—no judgment, just steady, private change."
  }
}
```

#### 2.3 Reestructurar App Router
```
src/app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── globals.css
└── middleware.ts (nuevo)
```

### Fase 3: Optimización SEO

#### 3.1 Layout Internacionalizado
**Archivo: `src/app/[locale]/layout.tsx`**
```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
        'x-default': '/es'
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://zenbox.com/${locale}`,
      siteName: 'zenbox',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 675,
          alt: t('title'),
        }
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/twitter-image.jpg'],
    }
  };
}
```

#### 3.2 Middleware para Redirecciones
**Archivo: `src/middleware.ts`**
```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
};
```

#### 3.3 Sitemap Dinámico
**Archivo: `src/app/sitemap.ts`**
```typescript
import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) => [
    {
      url: `https://zenbox.com/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `https://zenbox.com/${l}`])
        )
      }
    }
  ]);
}
```

### Fase 4: Optimización SEM

#### 4.1 Metadatos Dinámicos por Mercado
```json
// messages/es.json
{
  "metadata": {
    "title": "zenbox - Transforma el impulso en autocontrol medible",
    "description": "La primera caja inteligente con app, basada en ciencia conductual, para gestionar hábitos con total privacidad y sin juicios.",
    "keywords": "autocontrol, hábitos, privacidad, psicología conductual, caja inteligente"
  }
}

// messages/en.json
{
  "metadata": {
    "title": "zenbox - Transform impulse into measurable self-control",
    "description": "The first smart box with app, based on behavioral science, to manage habits with total privacy and no judgment.",
    "keywords": "self-control, habits, privacy, behavioral psychology, smart box"
  }
}
```

#### 4.2 Structured Data
**Archivo: `src/components/StructuredData.tsx`**
```typescript
import { useTranslations } from 'next-intl';

export default function StructuredData({ locale }: { locale: string }) {
  const t = useTranslations('metadata');
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "zenbox",
    "description": t('description'),
    "url": `https://zenbox.com/${locale}`,
    "brand": {
      "@type": "Brand",
      "name": "zenbox"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### Fase 5: Componentes Actualizados

#### 5.1 Ejemplo de Componente Hero
```typescript
// src/components/Hero.tsx
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  
  return (
    <section>
      <h1>{t('heading')}</h1>
      <p>{t('subheading')}</p>
    </section>
  );
}
```

#### 5.2 Selector de Idioma
```typescript
// src/components/LanguageSelector.tsx
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import Link from 'next/link';

export default function LanguageSelector() {
  const locale = useLocale();
  
  return (
    <div>
      {routing.locales.map((lng) => (
        <Link
          key={lng}
          href={`/${lng}`}
          className={locale === lng ? 'active' : ''}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
```

## 3. Cronograma de Implementación

### Semana 1: Configuración Base
- [ ] Instalar next-intl
- [ ] Configurar routing y request
- [ ] Crear estructura de carpetas
- [ ] Configurar middleware

### Semana 2: Migración de Contenido
- [ ] Crear archivos de traducción (es.json, en.json)
- [ ] Migrar todos los textos de src/data/
- [ ] Corregir inconsistencia de idioma en hero.ts
- [ ] Actualizar componentes para usar useTranslations

### Semana 3: SEO Avanzado
- [ ] Implementar metadatos dinámicos
- [ ] Configurar etiquetas hreflang
- [ ] Crear sitemap dinámico
- [ ] Añadir structured data

### Semana 4: SEM y Optimización
- [ ] Optimizar metadatos por mercado
- [ ] Implementar OpenGraph dinámico
- [ ] Añadir selector de idioma
- [ ] Testing y validación

## 4. Beneficios Esperados

### SEO
- **URLs por locale**: `/es`, `/en` para mejor indexación
- **Etiquetas hreflang**: Correcta asociación de idiomas
- **Metadatos optimizados**: Títulos y descripciones por mercado
- **Sitemap dinámico**: Mejor descubrimiento por buscadores

### SEM
- **Palabras clave localizadas**: Términos específicos por mercado
- **OpenGraph optimizado**: Mejor compartibilidad social
- **Structured data**: Rich snippets en resultados de búsqueda
- **Rendimiento**: Caché optimizado con next-intl

### UX
- **Navegación fluida**: Cambio de idioma sin perder contexto
- **Contenido localizado**: Mensajes adaptados culturalmente
- **URLs amigables**: Rutas traducidas cuando sea necesario

## 5. Métricas de Éxito

- **SEO**: Indexación en Google Search Console para ambos idiomas
- **SEM**: CTR mejorado en campañas multiidioma
- **UX**: Tiempo de carga < 2s, Core Web Vitals optimizados
- **Conversión**: Métricas A/B entre versiones de idioma

---

**Próximo paso**: ¿Comenzamos con la Fase 1 (instalación y configuración base)? 