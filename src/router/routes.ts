import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          footer: true,
        },
      },
      {
        path: ":type_normal(anime-bo|anime-le|hoat-hinh-trung-quoc|anime-sap-chieu)",
        redirect(to) {
          return `/danh-sach/${to.params.type_normal}`
        },
      },
      {
        path: ":type_normal(danh-sach|the-loai|quoc-gia|tag)/:value",
        alias: [":type_normal(season)/:value+"],
        component: () => import("pages/[_type-normal]/[value].vue"),
      },
      {
        path: "muc-luc",
        redirect: "/danh-sach/all",
      },
      {
        path: "lich-chieu-phim",
        component: () => import("pages/lich-chieu-phim.vue"),
      },
      {
        path: "bang-xep-hang/:type(day|voted|month|season|year)?",
        alias: ["bang-xep-hang/:type(day|voted|month|season|year).html"],
        component: () => import("pages/bang-xep-hang/[type]-.vue"),
      },
      {
        path: "tim-kiem/:keyword?",
        component: () => import("pages/tim-kiem/[keyword]-.vue"),
        meta: {
          footer: true,
        },
      },
      {
        path: "news",
        component: () => import("pages/news.vue"),
        meta: {
          footer: true,
        },
      },
      {
        path: "notification",
        component: () => import("pages/notification.vue"),
        meta: {
          footer: true,
        },
      },
      {
        path: "tai-khoan",
        component: () => import("pages/tai-khoan/index_outlet.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/tai-khoan/index.vue"),
            meta: {
              footer: true,
            },
          },
          {
            path: "edit-profile",
            component: () => import("pages/tai-khoan/edit-profile.vue")
          },
          {
            path: "setting",
            component: () => import("pages/tai-khoan/setting.vue")
          }
        ]
      },
    ],
  },


  {
    name: "phim_[season]_[chap]",
    path: "/phim/:season/:chap?",
    alias: ["/phim/:season/:prefix(.+)-:chap(\\d+).html"],
    component: () => import("pages/phim/_season.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
]

export default routes
