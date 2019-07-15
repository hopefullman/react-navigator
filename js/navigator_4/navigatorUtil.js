export default class navigatorUtil {
  static goBack(navigation){
    navigation.goBack();
  }

  static resetToHome(params){
    // const {navigation}=params;
    params.navigate("Home")
  }

  static goPage(params,page){
    const navigation =navigatorUtil.navigation
    navigation.navigate(page);
  }
}