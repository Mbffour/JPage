// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
// export function generateErrorMsg(type) {
//   alert(11111111)
//   alert(typeof type)
//   const hasKey = this.$te('errorMsg.' + type)
//   alert(55)
//   if (hasKey) {
//     // $t :this method from vue-i18n, inject in @/lang/index.js
//     const translatedMsg = this.$t('errorMsg.' + type)

//     alert(translatedMsg)
//     return translatedMsg
//   }
//   alert(3333)
//   return type
// }
