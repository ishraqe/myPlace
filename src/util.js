
export const renderTabIcon = (routeName) => {
    let iconName = '';
    if (routeName === 'Issues') {
       return iconName = `build`;
      } else if (routeName === 'Idea') {
        return iconName = `wb-incandescent`;
      }else if (routeName === 'Create') {
        return iconName = `add-circle`;
      }else if (routeName === 'Alert') {
        return iconName = `notifications-active`;
      }else if (routeName === 'Profile') {
        return iconName = `person`;
    }
}