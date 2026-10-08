package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PaymentsScreen(onCreate:()->Unit){Card{Column{Text("Payments");Text("Domain-specific payments workflow");Button(onClick=onCreate){Text("Create")}}}}
