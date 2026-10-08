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
import com.premium.template.userandroid.feature.modules.PostsScreen
import com.premium.template.userandroid.feature.modules.MediaScreen
import com.premium.template.userandroid.feature.modules.DraftsScreen
import com.premium.template.userandroid.feature.modules.PublishingScreen

private val modules=listOf("posts", "media", "drafts", "publishing")
@Composable
fun AppNavigation() {
    val context=LocalContext.current
    val vm=remember(context) { ModulesViewModel(DomainRepositoryImpl(LocalCache(context))) }
    var selected by remember { mutableStateOf(modules.firstOrNull() ?: "home") }
    LaunchedEffect(selected) { vm.load(selected) }
    PremiumTheme {
        Scaffold(
            topBar={ TopAppBar(title={ Text("Content CMS") }) },
            bottomBar={ NavigationBar { modules.take(4).forEach { m -> NavigationBarItem(selected==m,onClick={selected=m},icon={},label={Text(m.replaceFirstChar{it.uppercase()})}) } } }
        ) { pad ->
            Column(Modifier.padding(pad).padding(16.dp)) {
                when(selected) {
                "posts" -> PostsScreen(onCreate={vm.add(selected)})
                "media" -> MediaScreen(onCreate={vm.add(selected)})
                "drafts" -> DraftsScreen(onCreate={vm.add(selected)})
                "publishing" -> PublishingScreen(onCreate={vm.add(selected)})
                else -> Text("Select a module")
                }
                Spacer(Modifier.height(16.dp))
                LazyColumn { items(vm.items.value) { item -> ListItem(headlineContent={Text(item.title)},supportingContent={Text(item.status)}) } }
            }
        }
    }
}
