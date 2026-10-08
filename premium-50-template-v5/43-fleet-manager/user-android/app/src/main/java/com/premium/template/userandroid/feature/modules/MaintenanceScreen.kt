package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MaintenanceScreen(onCreate:()->Unit){Card{Column{Text("Maintenance");Text("Domain-specific maintenance workflow");Button(onClick=onCreate){Text("Create")}}}}
