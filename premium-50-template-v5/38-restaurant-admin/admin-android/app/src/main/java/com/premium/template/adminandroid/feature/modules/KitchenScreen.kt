package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun KitchenScreen(onCreate:()->Unit){Card{Column{Text("Kitchen");Text("Domain-specific kitchen workflow");Button(onClick=onCreate){Text("Create")}}}}
