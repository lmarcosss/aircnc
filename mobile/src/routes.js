import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { LoginScreen, ListScreen, BookScreen } from './screens'

const Routes = createAppContainer(
    createSwitchNavigator({
        LoginScreen,
        ListScreen,
        BookScreen
    })
)

export default Routes
