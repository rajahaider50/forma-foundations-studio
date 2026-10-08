package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DashboardsScreen(onCreate:()->Unit){Card{Column{Text("Dashboards");Text("Domain-specific dashboards workflow");Button(onClick=onCreate){Text("Create")}}}}
