package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DeliveryScreen(onCreate:()->Unit){Card{Column{Text("Delivery");Text("Domain-specific delivery workflow");Button(onClick=onCreate){Text("Create")}}}}
