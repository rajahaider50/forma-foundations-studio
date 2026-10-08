package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AlertsScreen(onCreate:()->Unit){Card{Column{Text("Alerts");Text("Domain-specific alerts workflow");Button(onClick=onCreate){Text("Create")}}}}
