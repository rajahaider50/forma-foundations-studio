package com.premium.template.userandroid.navigation

import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.platform.LocalContext
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.*
import androidx.compose.ui.Modifier
import com.premium.template.userandroid.core.database.LocalCache
import com.premium.template.userandroid.core.designsystem.PremiumTheme
import com.premium.template.userandroid.data.repository.DomainRepositoryImpl
import com.premium.template.userandroid.feature.modules.ModulesViewModel
import com.premium.template.userandroid.feature.modules.GroupsScreen
import com.premium.template.userandroid.feature.modules.ExpensesScreen
import com.premium.template.userandroid.feature.modules.BalancesScreen

private val modules=listOf("groups", "expenses", "balances")
@Composable
fun AppNavigation() {
    val context=LocalContext.current
    val vm=remember(context) { ModulesViewModel(DomainRepositoryImpl(LocalCache(context))) }
    var selected by remember { mutableStateOf(modules.firstOrNull() ?: "home") }
    LaunchedEffect(selected) { vm.load(selected) }
    PremiumTheme {
        Scaffold(
            topBar={ TopAppBar(title={ Text("Expense Split") }) },
            bottomBar={ NavigationBar { modules.take(4).forEach { m -> NavigationBarItem(selected==m,onClick={selected=m},icon={},label={Text(m.replaceFirstChar{it.uppercase()})}) } } }
        ) { pad ->
            Column(Modifier.padding(pad).padding(16.dp)) {
                when(selected) {
                "groups" -> GroupsScreen(onCreate={vm.add(selected)})
                "expenses" -> ExpensesScreen(onCreate={vm.add(selected)})
                "balances" -> BalancesScreen(onCreate={vm.add(selected)})
                else -> Text("Select a module")
                }
                Spacer(Modifier.height(16.dp))
                LazyColumn { items(vm.items.value) { item -> ListItem(headlineContent={Text(item.title)},supportingContent={Text(item.status)}) } }
            }
        }
    }
}
