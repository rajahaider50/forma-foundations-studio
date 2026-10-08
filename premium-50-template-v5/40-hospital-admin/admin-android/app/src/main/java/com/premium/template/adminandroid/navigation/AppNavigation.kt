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
import com.premium.template.adminandroid.feature.modules.PatientsScreen
import com.premium.template.adminandroid.feature.modules.AppointmentsScreen
import com.premium.template.adminandroid.feature.modules.RecordsScreen

private val modules=listOf("patients", "appointments", "records")
@Composable
fun AppNavigation() {
    val context=LocalContext.current
    val vm=remember(context) { ModulesViewModel(DomainRepositoryImpl(LocalCache(context))) }
    var selected by remember { mutableStateOf(modules.firstOrNull() ?: "home") }
    LaunchedEffect(selected) { vm.load(selected) }
    PremiumTheme {
        Scaffold(
            topBar={ TopAppBar(title={ Text("Hospital Admin") }) },
            bottomBar={ NavigationBar { modules.take(4).forEach { m -> NavigationBarItem(selected==m,onClick={selected=m},icon={},label={Text(m.replaceFirstChar{it.uppercase()})}) } } }
        ) { pad ->
            Column(Modifier.padding(pad).padding(16.dp)) {
                when(selected) {
                "patients" -> PatientsScreen(onCreate={vm.add(selected)})
                "appointments" -> AppointmentsScreen(onCreate={vm.add(selected)})
                "records" -> RecordsScreen(onCreate={vm.add(selected)})
                else -> Text("Select a module")
                }
                Spacer(Modifier.height(16.dp))
                LazyColumn { items(vm.items.value) { item -> ListItem(headlineContent={Text(item.title)},supportingContent={Text(item.status)}) } }
            }
        }
    }
}
