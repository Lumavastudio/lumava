module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Container({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ${className || ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Container.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const links = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/#about"
        },
        {
            title: "Portfolio",
            href: "/#portfolio"
        },
        {
            title: "Services",
            href: "/#services"
        },
        {
            title: "Contact",
            href: "/#contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-white text-2xl font-bold font-cinzel",
                        children: "Lumava"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex space-x-10",
                        children: links.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "text-white font-light hover:text-white/70 transition-colors duration-300 font-cinzel",
                                children: link.title
                            }, idx, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setOpen(!open),
                            className: "text-white text-2xl",
                            children: open ? "✕" : "☰"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "md:hidden bg-black/90 w-full text-center py-6 space-y-4",
                    children: links.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: "text-white text-xl font-light block font-cinzel",
                            onClick: ()=>setOpen(false),
                            children: link.title
                        }, idx, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/portfolio/photography/_projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/portfolio/photography/_projects.ts
__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: "project001",
        folder: "project001",
        title: "Bela – Portrait Photography",
        description: "A professional studio portrait series highlighting the elegance, personality, and subtle femininity of the model Bela. Carefully crafted lighting, dynamic angles, and expressive poses demonstrate a strong command of studio photography and a keen eye for detail, showcasing both technical expertise and artistic vision.",
        cover: "/portfolio/photography/project001/photo01.webp",
        media: [
            {
                type: "image",
                src: "/portfolio/photography/project001/photo01.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo02.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo03.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo04.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo05.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo06.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo07.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo08.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project001/photo09.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project001/photo10.m4v"
            }
        ]
    },
    {
        id: "project002",
        folder: "project002",
        title: "Marina – Musician Portrait Series",
        description: "A natural-light portrait project featuring Marina, a handpan musician and artisan. The session blends environmental portraiture with authentic artistic expression, capturing both the personal essence of the subject and the musical storytelling.",
        cover: "/portfolio/photography/project002/photo01.webp",
        media: [
            {
                type: "image",
                src: "/portfolio/photography/project002/photo01.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo02.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo03.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo04.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo05.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo06.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo07.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project002/photo08.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project002/photo09.m4v"
            }
        ]
    },
    {
        id: "project003",
        folder: "project003",
        title: "Ira – Studio Fine-Art Portrait Series",
        description: "A refined studio portrait project featuring Ira, photographed through layers of delicate tulle fabric to create softness, depth, and emotional texture. The session emphasizes fine details, controlled lighting, and artistic composition.",
        cover: "/portfolio/photography/project003/photo01.webp",
        media: [
            {
                type: "image",
                src: "/portfolio/photography/project003/photo01.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project003/photo02.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project003/photo03.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project003/photo04.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project003/photo05.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project003/photo06.m4v"
            }
        ]
    },
    {
        id: "project004",
        folder: "project004",
        title: "Reyhan – Travel Portrait Collection (Zurich, Paris, Bali)",
        description: "A global portrait series capturing Reyhan across Zurich, Paris, and Bali. The project combines travel, culture, and personal storytelling through photography, balancing environmental context and subject focus.",
        cover: "/portfolio/photography/project004/photo01.webp",
        media: [
            {
                type: "image",
                src: "/portfolio/photography/project004/photo01.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo02.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo03.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project004/photo04.m4v"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo05.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo06.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo07.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo08.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo09.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project004/photo10.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project004/photo11.m4v"
            }
        ]
    },
    {
        id: "project005",
        folder: "project005",
        title: "Fashion & Accessories – Editorial Lookbook Series",
        description: "An editorial photography project showcasing handcrafted accessories and fashion details. Each frame emphasizes craftsmanship, texture, and styling through dynamic compositions and lighting.",
        cover: "/portfolio/photography/project005/photo01.webp",
        media: [
            {
                type: "image",
                src: "/portfolio/photography/project005/photo01.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project005/photo02.m4v"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo03.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo04.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo05.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo06.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo07.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project005/photo08.m4v"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo09.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo10.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo11.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo12.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo13.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo14.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project005/photo15.webp"
            }
        ]
    },
    {
        id: "project006",
        folder: "project006",
        title: "Sepideh – Urban & Nature Portrait Series",
        description: "A dual-environment portrait project featuring the model Sepideh, blending urban textures and natural landscapes. The project combines expressive poses, environmental storytelling, and detailed composition to create a dynamic and visually compelling narrative.",
        cover: "/portfolio/photography/project006/photo01.webp",
        media: [
            {
                type: "image",
                src: "/portfolio/photography/project006/photo01.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project006/photo02.m4v"
            },
            {
                type: "image",
                src: "/portfolio/photography/project006/photo03.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project006/photo04.webp"
            },
            {
                type: "video",
                src: "/portfolio/photography/project006/photo05.m4v"
            },
            {
                type: "image",
                src: "/portfolio/photography/project006/photo06.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project006/photo07.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project006/photo08.webp"
            },
            {
                type: "image",
                src: "/portfolio/photography/project006/photo09.webp"
            }
        ]
    }
];
}),
"[project]/app/portfolio/photography/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotographyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$photography$2f$_projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/photography/_projects.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const globalStyles = `
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
  background: transparent !important;
}
`;
if (typeof document !== "undefined" && !document.getElementById("hide-scrollbar-style")) {
    const style = document.createElement("style");
    style.id = "hide-scrollbar-style";
    style.innerHTML = globalStyles;
    document.head.appendChild(style);
}
function PhotographyPage() {
    const [lightboxProject, setLightboxProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [readMore, setReadMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const open = (project)=>{
        setLightboxProject(project);
        setCurrent(0);
        setReadMore(false);
    };
    const close = ()=>{
        setLightboxProject(null);
        setCurrent(0);
        setReadMore(false);
    };
    const next = ()=>{
        if (!lightboxProject?.media.length) return;
        setReadMore(false);
        setCurrent((p)=>(p + 1) % lightboxProject.media.length);
    };
    const prev = ()=>{
        if (!lightboxProject?.media.length) return;
        setReadMore(false);
        setCurrent((p)=>(p - 1 + lightboxProject.media.length) % lightboxProject.media.length);
    };
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e)=>{
        touchEndX.current = e.changedTouches[0].clientX;
        if (touchStartX.current == null) return;
        const d = touchStartX.current - touchEndX.current;
        if (d > 50) next();
        if (d < -50) prev();
        touchStartX.current = null;
        touchEndX.current = null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen flex flex-col",
        style: {
            fontFamily: "'Cinzel', serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/photography/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-28",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl font-bold mb-12 text-center tracking-tight",
                            children: "Photography"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/photography/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$photography$2f$_projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>open(p),
                                    className: "group relative cursor-pointer overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-50 bg-gradient-to-t from-white/10 via-transparent to-white/10 blur-xl transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        p.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.cover,
                                            alt: p.id,
                                            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-64 bg-zinc-900 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, p.id, true, {
                                    fileName: "[project]/app/portfolio/photography/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/photography/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/photography/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/photography/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full fixed bottom-0 z-40 bg-black/40 backdrop-blur-md flex justify-center md:justify-center gap-4 p-3 md:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/portfolio/motion-design",
                                className: "px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700",
                                style: {
                                    fontFamily: "'Cinzel', serif"
                                },
                                children: "Motion Design"
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/portfolio/videography",
                                className: "px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700",
                                style: {
                                    fontFamily: "'Cinzel', serif"
                                },
                                children: "Videography"
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/portfolio/brand-and-music",
                                className: "px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700",
                                style: {
                                    fontFamily: "'Cinzel', serif"
                                },
                                children: "Brand & Music"
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/photography/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden w-full justify-around items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/portfolio/motion-design",
                                className: "flex flex-col items-center text-sm text-white/90 hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 mb-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 3v3m0 12v3m9-9h-3M6 12H3m13.657-6.343l-2.12 2.12M7.464 16.536l-2.12 2.12m0-13.657l2.12 2.12m9.193 9.193l2.12 2.12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/photography/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    "Motion"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/portfolio/videography",
                                className: "flex flex-col items-center text-sm text-white/90 hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 mb-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h10a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/photography/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    "Video"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/portfolio/brand-and-music",
                                className: "flex flex-col items-center text-sm text-white/90 hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 mb-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 20l9-16H3l9 16zm0-6a2 2 0 100-4 2 2 0 000 4z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/photography/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    "Brand"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/photography/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portfolio/photography/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            lightboxProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4",
                onClick: close,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-5xl max-h-[90vh] flex flex-col relative",
                    onClick: (e)=>e.stopPropagation(),
                    onTouchStart: handleTouchStart,
                    onTouchEnd: handleTouchEnd,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: close,
                            className: "absolute top-2 right-2 z-50 text-6xl text-white p-2 hover:text-gray-300",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/photography/page.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-center items-center relative overflow-hidden rounded-md flex-shrink-0",
                            children: [
                                lightboxProject.media.length ? lightboxProject.media[current].type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: `/api/video?file=${lightboxProject.media[current].src}`,
                                    className: "w-full rounded-md max-h-[70vh] object-contain pointer-events-none",
                                    controls: true,
                                    autoPlay: true,
                                    muted: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/photography/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: lightboxProject.media[current].src,
                                    alt: "",
                                    className: "w-full rounded-md max-h-[70vh] object-contain pointer-events-none select-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/photography/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-64 bg-zinc-900 rounded-md flex items-center justify-center text-gray-400",
                                    children: "No media found"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/photography/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this),
                                lightboxProject.media.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: prev,
                                            className: "absolute left-2 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 rounded-full hover:bg-white/40 transition-colors z-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 md:w-6 h-5 md:h-6 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M15 19l-7-7 7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/photography/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: next,
                                            className: "absolute right-2 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 rounded-full hover:bg-white/40 transition-colors z-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 md:w-6 h-5 md:h-6 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/photography/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded z-50",
                                            children: [
                                                current + 1,
                                                " / ",
                                                lightboxProject.media.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/photography/page.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 overflow-auto max-h-[25vh] px-2 md:px-0 hide-scrollbar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-3xl text-gray-200 text-base md:text-lg leading-relaxed",
                                style: {
                                    fontFamily: "'Open Sans', Open Sans"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 font-bold text-white text-xl",
                                        children: lightboxProject.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/photography/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: readMore || !lightboxProject.description ? lightboxProject.description : lightboxProject.description.slice(0, 400) + (lightboxProject.description.length > 400 ? "..." : "")
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/photography/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: lightboxProject.description.length > 400 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setReadMore((r)=>!r),
                                            className: "text-sm text-blue-300 underline",
                                            children: readMore ? "Read less" : "Read more"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/photography/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/photography/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/photography/page.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/photography/page.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/photography/page.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/photography/page.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/photography/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__67e441b8._.js.map