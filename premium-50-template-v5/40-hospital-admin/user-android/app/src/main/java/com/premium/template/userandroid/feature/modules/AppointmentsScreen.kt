package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AppointmentsScreen(onCreate:()->Unit){Card{Column{Text("Appointments");Text("Domain-specific appointments workflow");Button(onClick=onCreate){Text("Create")}}}}
