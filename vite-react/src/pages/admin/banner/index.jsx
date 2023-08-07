import BannerCreateForm from "./banner-create.page";
import BannerListPage from "./banner-list.page";
import BannerService from "./banner.service";
const bannerSvc = new BannerService()


export default {
    BannerCreateForm,
    bannerSvc,
    BannerListPage
}