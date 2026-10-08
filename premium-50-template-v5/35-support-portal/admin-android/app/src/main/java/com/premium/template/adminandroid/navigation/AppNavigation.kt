package com.premium.template.adminandroid.navigation

import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.platform.LocalContext
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.*
import androidx.compose.ui.Modifier
import com.premium.template.adminandroid.core.database.LocalCache
import com.premium.template.adminandroid.core.designsystem.PremiumTheme
import com.premium.template.adminandroid.data.repository.DomainRepositoryImpl
import com.premium.template.adminandroid.feature.modules.ModulesViewModel
import com.premium.template.adminandroid.feature.modules.FaqScreen
import com.premium.template.adminandroid.feature.modules.TicketsScreen
import com.premium.template.adminandroid.feature.modules.FeedbackScreen

private val modules=listOf("faq", "tickets", "feedback")
@Composable
fun AppNavigation() {
    val context=LocalContext.current
    val vm=remember(context) { ModulesViewModel(DomainRepositoryImpl(LocalCache(context))) }
    var selected by remember { mutableStateOf(modules.firstOrNull() ?: "home") }
    LaunchedEffect(selected) { vm.load(selected) }
    PremiumTheme {
        Scaffold(
            topBar={ TopAppBar(title={ Text("Support Portal") }) },
            bottomBar={ NavigationBar { modules.take(4).forEach { m -> NavigationBarItem(selected==m,onClick={selected=m},icon={},label={Text(m.replaceFirstChar{it.uppercase()})}) } } }
        ) { pad ->
            Column(Modifier.padding(pad).padding(16.dp)) {
                when(selected) {
                "faq" -> FaqScreen(onCreate={vm.add(selected)})
                "tickets" -> TicketsScreen(onCreate={vm.add(selected)})
                "feedback" -> FeedbackScreen(onCreate={vm.add(selected)})
                else -> Text("Select a module")
                }
                Spacer(Modifier.height(16.dp))
                LazyColumn { items(vm.items.value) { item -> ListItem(headlineContent={Text(item.title)},supportingContent={Text(item.status)}) } }
            }
        }
    }
}
