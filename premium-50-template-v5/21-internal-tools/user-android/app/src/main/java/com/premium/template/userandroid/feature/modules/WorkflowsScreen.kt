package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun WorkflowsScreen(onCreate:()->Unit){Card{Column{Text("Workflows");Text("Domain-specific workflows workflow");Button(onClick=onCreate){Text("Create")}}}}
