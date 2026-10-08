package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ShipmentsScreen(onCreate:()->Unit){Card{Column{Text("Shipments");Text("Domain-specific shipments workflow");Button(onClick=onCreate){Text("Create")}}}}
